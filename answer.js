function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

function enough(cap, on, wait) {
  return (on+wait > cap) ? on+wait-cap : 0;
}

function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : Math.abs(cap - on - wait);
}
