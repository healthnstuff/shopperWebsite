const alphaNumericChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const emailProviders = ["@gmail.com", "@yahoo.com", "@outlook.com", "@aol.com"];
const creditCardCompanies = [
  "Mastercard",
  "Bank of America",
  "Visa",
  "Capital One",
  "American Express",
  "Chase",
  "Citi",
  "American Express",
  "Discover",
];
const roadTypes = [
  "Rd.",
  "Ave.",
  "Blvd.",
  "Hwy.",
  "Way",
  "East",
  "West",
  "North",
  "South",
];
const countries = ["USA", "Canada", "Mexico"];
const dummyText =
  "Curabitur quis ipsum leo. Proin malesuada nunc eget est ultricies volutpat. Pellentesque at urna luctus, volutpat nisi vitae, dapibus ipsum. Nam ullamcorper enim id ipsum porta interdum. Nullam laoreet, est id laoreet bibendum, justo tortor interdum erat, nec ullamcorper elit orci ut lorem. Mauris in vulputate metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis in dolor scelerisque, dignissim nunc et, dictum purus. Donec hendrerit laoreet nibh at varius. Nullam eleifend dignissim ante vitae rhoncus. Aliquam hendrerit tincidunt felis ut facilisis. Maecenas gravida eleifend felis, nec mollis ligula facilisis ut. Mauris dictum consectetur libero nec ullamcorper.".split('.');
const productCategories = ['essential oil', 'supplement', 'vitamin', 'tonic', 'tea', 'probiotic', 'skincare', 'cdb', 'beverage', 'soap'];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const _getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const looper = (charType, length, isProperNoun = false) => {
  let ret = "";
  for (let i = 0; i < length; i++) {
    ret = ret.concat(charType[_getRandomInt(charType.length)]);
  }
  return isProperNoun ? ret[0].toUpperCase().concat(ret.slice(1)) : ret;
};

const getUser = () => {
  const email = `${looper(alphaNumericChars, getRandomInt(4, 11))}${
    emailProviders[_getRandomInt(emailProviders.length)]
  }`;
  const password = looper(alphaNumericChars, getRandomInt(5, 13));
  const firstName = looper(alphabet, getRandomInt(1, 10), true);
  const lastName = looper(alphabet, getRandomInt(1, 10), true);
  const telephone = looper(numbers, 10);
  return {
    email,
    password,
    firstName,
    lastName,
    telephone,
  };
};

const getUserPayment = () => {
  const user_id = _getRandomInt(100);
  const provider =
    creditCardCompanies[_getRandomInt(creditCardCompanies.length)];
  const cardNo = [looper(numbers, 16)];
  // may have to change expiry to a date data type
  const expiry = `${getRandomInt(1, 13).toString()}/${getRandomInt(
    2022,
    2030
  )}`;
  return {
    user_id,
    provider,
    cardNo,
    expiry,
  };
};

const getAddress = () => {
  const user_id = _getRandomInt(100);
  const addressLine1 = `${looper(numbers, getRandomInt(1, 3))} ${looper(
    alphabet,
    getRandomInt(3, 10),
    true
  )} ${roadTypes[_getRandomInt(roadTypes.length)]}`;
  const city = looper(alphabet, getRandomInt(3, 13), true);
  const postalCode = looper(numbers, 5);
  const country = countries[_getRandomInt(countries.length)];
  const telephone = [looper(numbers, 10)];
  return {
    user_id,
    addressLine1,
    city,
    postalCode,
    country,
    telephone,
  };
};

const getProduct = () => {
  const category_id = _getRandomInt(productCategories.length)
  const name = looper(alphabet, getRandomInt(2, 7), true);
  const description = dummyText[_getRandomInt(dummyText.length)];
  const price = parseFloat(`${looper(numbers, getRandomInt(1, 3))}.${looper(numbers, 2)}`);
  const inventory = getRandomInt(50, 2000);
  return {
    category_id,
    name,
    description,
    price,
    inventory,
  };
};

const getCategory = () => {
    const name = productCategories[_getRandomInt(productCategories.length)];
    return {
        name
    }
}

const getSession = () => {
  const user_id = _getRandomInt(100);
  const total = getRandomInt(1, 1000)
  return {
    user_id,
    total
  }
}

// console.log(getAddress())
// console.log(getUser())
// console.log(getProduct())
console.log(getCategory())

module.exports = {
  getUser,
  getUserPayment,
  getAddress,
  getProduct,
  getCategory
};
