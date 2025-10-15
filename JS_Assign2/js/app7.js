//API - Fetch data using API
let result;
await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(response => response.json())
  .then(data => result = data);

//console.log(result.meals);
result.meals.forEach(meal => console.log(meal.strMeal));
