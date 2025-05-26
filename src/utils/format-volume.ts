export default function formatVolume(
  volume: number,
  type: "bits" | "packets"
): [string, string] {
  if (type === "bits") {
    const Kbps = 1024;
    const Mbps = Kbps * 1024;
    const Gbps = Mbps * 1024;
    if (volume >= Gbps) {
      return [(volume / Gbps).toFixed(1), "Gbps"];
    } else if (volume >= Mbps) {
      return [(volume / Mbps).toFixed(1), "Mbps"];
    } else if (volume >= Kbps) {
      return [(volume / Kbps).toFixed(1), "Kbps"];
    }
    return [volume.toFixed(1), "bits"];
  } else {
    const Kpps = 1000;
    const Mpps = Kpps * 1000;
    const Gpps = Mpps * 1000;
    if (volume >= Gpps) {
      return [(volume / Gpps).toFixed(1), "Gpps"];
    } else if (volume >= Mpps) {
      return [(volume / Mpps).toFixed(1), "Mpps"];
    } else if (volume >= Kpps) {
      return [(volume / Kpps).toFixed(1), "Kpps"];
    }
    return [volume.toFixed(1), "packets"];
  }
}
