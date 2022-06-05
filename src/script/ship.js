
const Ship = (length,hits = [],sunk = false, horizontal = false, position) => {
  const hit = (location) => {
    hits.push(location);
  }

  const issunk = () => {
    return hits.length === length;
  }

  return {length,hits,sunk,hit,issunk,position,horizontal};
}

export default Ship
