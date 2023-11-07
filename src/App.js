import logo from './logo.svg';
import './App.css';

function App() {
  const firstSingluar = ["I", "me", "my", "mine", "myself"];
  const firstPlural = ["we", "us", "our", "ours", "ourseves"];
  const secondSingular = ["you", "your", "yourself"];

  let allPronouns = [];
  let occurrences = [];

  allPronouns = allPronouns.concat(firstSingluar, firstPlural, secondSingular); // unify all arrays

  const findTerms = (text, terms) => {
    const textArray = text.split(" ") // split the sentence into an array of words

    textArray.forEach(singleWord => { // each word in the sentence array
      terms.forEach(search => { // each word in the list of terms
        if (singleWord === search) { //find a match
          updateOccurances(search); // 
        }
      })
    })
  }

  const updateOccurances = (word) => {
    occurrences.push(word) // push the words into occurrences array to reduce later
  }

  function frequency(terms) { // reducer function determine how many times a word has occured (multiple ways to do this)
    return terms.reduce((acc, curr) => { // running accumulator / current
      acc[curr] = -~acc[curr]; 
      return acc; // return the accumulator to keep track of each occurence
    }, {});
  }

  let sentence = "my our my our my us you me my our us";

  findTerms(sentence, allPronouns)
  console.log(frequency(occurrences))



  return (
    <div className="App">

    </div>
  );
}

export default App;
