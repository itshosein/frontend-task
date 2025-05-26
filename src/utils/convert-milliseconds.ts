export default function convertMilliseconds(milliseconds: number) {
  if (!milliseconds) {
    milliseconds = 0;
  }
  const d = Math.floor(milliseconds / 86400000);
  const h = Math.floor((milliseconds % 86400000) / 3600000);
  const m = Math.floor((milliseconds % 3600000) / 60000);
  return { days: d, hours: h, minutes: m };
}
