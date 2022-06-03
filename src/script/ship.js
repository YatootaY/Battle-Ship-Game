
const Ship = (length,hits = [],sunk = false) => {
  const hit = (location) => {
    hits.push(location);
  }

  const issunk = () => {
    let answer = [...Array(length).keys()].join(',') === hits.sort().join(',')
    sunk = answer;
    return sunk;
  }

  return {length,hits,sunk,hit,issunk};
}

export default Ship
