---
sidebar_position: 1
---

# /weather

Shows current weather conditions for any city, powered by [Open-Meteo](https://open-meteo.com/) (free, no API key required).

## Usage

```
/weather <city>
```

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `city` | string | ✅ | City name, up to 100 characters |

## Response

An embed showing:
- **Condition** — weather description with emoji (e.g. ⛅ Partly cloudy)
- **Temperature** — current temp in °C and feels-like temperature
- **Humidity** — relative humidity percentage
- **Wind** — speed in km/h with compass direction

## Example

```
/weather Lisbon
```

Returns an embed titled **⛅ Lisbon, Lisbon, Portugal** with current conditions.

## Notes

- City lookup uses Open-Meteo's geocoding API — common city names work best.
- Results are in metric units (°C, km/h).
- There is a 5-second per-user cooldown to prevent spam.
- Works in any channel; no special permissions required.
