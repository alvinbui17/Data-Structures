// count the number of contiguous segments of password that contain at least one vowel and one consonant

// ie thisisbeautiful --> thi - si - sbe - aut - if - ul --> return 6

const passwordStrength = (password) => {
  if (password.length < 2) {
    return 0;
  }

  let vowels = ["a", "e", "i", "o", "u", "y"];

  let count = 0;
  let vowel = 0;
  let consonant = 0;

  for (let i = 0; i < password.length; i++) {
    if (vowels.includes(password[i])) {
      vowel++;
    } else {
      consonant++;
    }

    if (consonant >= 1 && vowel >= 1) {
      vowel = 0;
      consonant = 0;
      count++;
    }
  }
  return count;
};

console.log(passwordStrength("thisisbeautiful"));
