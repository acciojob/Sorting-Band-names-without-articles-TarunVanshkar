//your code here
/*
const touristSpots = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith', 'Rolling Stones', 'Queen', 'Anthrax', 'Black Sabbath'];

		function sortBands(bands) {
			const articles = ['the', 'a', 'an'];
			const sortedBands = bands.sort(function(a, b) {
				const nameA = a.toLowerCase().replace(/^(the|an|a)\s+/, '');
				const nameB = b.toLowerCase().replace(/^(the|an|a)\s+/, '');
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			});
			return sortedBands;
		}

		const sortedBands = sortBands(bandNames);

		const bandList = document.getElementById("band");
		sortedBands.forEach(function(band) {
			const li = document.createElement("li");
			li.appendChild(document.createTextNode(band));
			bandList.appendChild(li);
		});
*/

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Remove articles 'a', 'an' and 'the' from the beginning of the band names
touristSpots = touristSpots.map(bandName => {
  let words = bandName.split(' ');
  if (['a', 'an', 'the'].includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
});

// Sort the band names in lexicographic order
touristSpots.sort();

// Display the sorted band names in an unordered list
let ul = document.createElement('ul');
ul.setAttribute('id', 'band');
for (let i = 0; i < touristSpots.length; i++) {
  let li = document.createElement('li');
  li.textContent = touristSpots[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);