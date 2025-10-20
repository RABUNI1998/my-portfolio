/* eslint-disable no-undef */
/**
 * API Endpoint to Fetch Portfolio Statistics
 *
 * How this works:
 * 1. This is a Netlify serverless function that acts as a simple API.
 * 2. It returns a JSON object with 'visits' and 'requests'.
 *
 * How to make it real:
 * - For now, it returns mock data that increments with each visit.
 * - To connect to a real analytics provider (like Google Analytics, Vercel, etc.):
 *   a. Use their API to fetch the actual visitor and event counts.
 *   b. You would typically store these values in a simple database (like Vercel KV,
 *      Upstash, or even a JSON file on a CDN) and have this function read from there.
 *   c. A separate scheduled function (cron job) would run periodically (e.g., every hour)
 *      to update the database with the latest stats from your analytics provider.
 *
 * This setup prevents hitting analytics API rate limits and keeps your site fast.
 */

let mockVisits = 1053; // Starting number for visits
let mockRequests = 42; // Starting number for service requests

module.exports.handler = async function () {
  // Increment visits on each API call for a dynamic feel
  mockVisits += 1;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      visits: mockVisits,
      requests: mockRequests, // This would be updated by your analytics event
    }),
  };
};