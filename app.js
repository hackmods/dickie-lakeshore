/**
 * Dickie Lakeshore — Shows List
 *
 * Loads upcoming shows from a CSV file. In production, point SHOWS_CSV_URL
 * at a published Google Sheet so Richard can update shows without touching code.
 *
 * How to set up Google Sheets:
 * 1. Create a sheet with columns: Title, Date, Location, Link
 * 2. File → Share → Publish to web → choose CSV format
 * 3. Paste the published URL into SHOWS_CSV_URL below
 *
 * Note: Avoid commas in Location names — the parser splits on commas.
 */

// Set to your published Google Sheets CSV URL in production.
// Leave empty string to fall back to local shows.csv.
const SHOWS_CSV_URL = '';
const SHOWS_CSV_FALLBACK = 'shows.csv';

const showsContainer = document.getElementById('shows-container');

/**
 * Fetch CSV text from the configured URL or local fallback file.
 */
async function fetchShows() {
  const url = SHOWS_CSV_URL || SHOWS_CSV_FALLBACK;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }

  return response.text();
}

/**
 * Parse CSV text into an array of show objects.
 * First row is treated as headers; remaining rows become show entries.
 */
function parseCSV(text) {
  const lines = text.trim().split('\n').filter((line) => line.trim() !== '');

  if (lines.length < 2) {
    return [];
  }

  const headers = lines[0].split(',').map((h) => h.trim());

  return lines.slice(1).map((line) => {
    const values = line.split(',').map((v) => v.trim());
    const show = {};

    headers.forEach((header, index) => {
      show[header] = values[index] || '';
    });

    return show;
  });
}

/**
 * Build HTML for a single show card.
 * Only shows "Buy Tickets" when the Link column has a value.
 */
function createShowCard(show) {
  const ticketButton = show.Link
    ? `<a href="${show.Link}" target="_blank" rel="noopener"
         class="inline-block mt-4 bg-canadian-red hover:bg-red-800 text-white font-semibold py-2 px-5 rounded transition-colors text-sm">
         Buy Tickets
       </a>`
    : '';

  return `
    <article class="bg-white rounded-lg shadow-md border-l-4 border-canadian-red p-6 flex flex-col">
      <p class="text-canadian-red font-semibold text-sm uppercase tracking-wide">${show.Date}</p>
      <h3 class="font-display text-xl font-bold text-midnight-blue mt-2">${show.Title}</h3>
      <p class="text-midnight-blue/70 mt-2 flex-grow">${show.Location}</p>
      ${ticketButton}
    </article>
  `;
}

/**
 * Render show cards into the container, or display a friendly message.
 */
function renderShows(shows) {
  if (!shows.length) {
    showsContainer.innerHTML =
      '<p class="text-midnight-blue/60 col-span-full text-center">No upcoming shows — check back soon!</p>';
    return;
  }

  showsContainer.innerHTML = shows.map(createShowCard).join('');
}

/**
 * Display an error message when the CSV cannot be loaded.
 */
function renderError() {
  showsContainer.innerHTML =
    '<p class="text-midnight-blue/60 col-span-full text-center">Couldn\'t load shows right now.</p>';
}

/**
 * Initialize: fetch, parse, and render shows on page load.
 */
async function init() {
  try {
    const csvText = await fetchShows();
    const shows = parseCSV(csvText);
    renderShows(shows);
  } catch (error) {
    console.error('Error loading shows:', error);
    renderError();
  }
}

document.addEventListener('DOMContentLoaded', init);
