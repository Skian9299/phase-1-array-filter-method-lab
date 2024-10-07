// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
function fuzzyMatch(drivers,letters){

    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
   

    beforeEach(function () {

        drivers.length = 0;
        drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    });

    it('returns matching drivers if name starts with the given letters', function () {
        expect(fuzzyMatch(drivers, 'Sa')).to.eql(['Sammy', 'Sally', 'Sarah']);
    });

    it('returns an empty array if no driver matches', function () {
        expect(fuzzyMatch(drivers, 'Z')).to.eql([]);
    });

    it('returns drivers matching case insensitively', function () {
        expect(fuzzyMatch(drivers, 'b')).to.eql(['Bobby', 'bobby']);
    });
};



function matchName(drivers, name){

    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
};

console.log(matchName(drivers, 'Bobby'));    