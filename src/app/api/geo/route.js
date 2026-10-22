import { NextResponse } from "next/server";
import { countries } from "@/data/international/countries";

// Map ISO 2-letter codes to international hub keys
const ISO_TO_HUB = {
  US: "usa",
  GB: "uk",
  AU: "au",
  AE: "uae",
};

// Fallback currency & dialing codes for common regions
const COUNTRY_DIAL_CODES = {
  US: "+1",
  GB: "+44",
  AU: "+61",
  AE: "+971",
  IN: "+91",
  CA: "+1",
  DE: "+49",
  FR: "+33",
  SG: "+65",
};

export async function GET(request) {
  try {
    const headers = request.headers;

    // Vercel edge/serverless geolocation headers
    let countryCode =
      headers.get("x-vercel-ip-country") ||
      headers.get("cf-ipcountry") ||
      headers.get("x-country-code");

    let region =
      headers.get("x-vercel-ip-country-region") ||
      headers.get("x-region-code") ||
      "";

    let city = headers.get("x-vercel-ip-city") || "";

    // Allow override for local development testing via query param (?country=US)
    const { searchParams } = new URL(request.url);
    const testCountry = searchParams.get("country");
    if (testCountry) {
      countryCode = testCountry.toUpperCase();
    }

    // Default fallback if running locally without headers
    if (!countryCode) {
      countryCode = "US"; // Safe enterprise fallback
    }

    const hubKey = ISO_TO_HUB[countryCode?.toUpperCase()] || null;
    const hubData = hubKey ? countries[hubKey] : null;

    const matchedHub = hubData
      ? {
          code: hubData.code,
          name: hubData.name,
          flag: hubData.flag,
          currency: hubData.currency,
          hubUrl: `/${hubData.code}`,
          badge: hubData.badge,
        }
      : null;

    return NextResponse.json(
      {
        success: true,
        countryCode: countryCode?.toUpperCase() || null,
        region: region ? decodeURIComponent(region) : null,
        city: city ? decodeURIComponent(city) : null,
        dialCode: COUNTRY_DIAL_CODES[countryCode?.toUpperCase()] || "+1",
        matchedHub,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to resolve geolocation",
      },
      { status: 500 }
    );
  }
}
