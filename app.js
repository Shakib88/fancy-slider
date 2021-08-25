
// search button and event handler
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    if (input == false) {
        alert('Enter Something In The Search BOx')
    } else {
        getUrl(input);
    }
    document.getElementById('input').value = '';
    document.getElementById('mealContainer').innerHTML = '';
    document.getElementById('detail-parent').innerHTML = '';
})


//    get url for meals
const getUrl = input => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => getMeal(data.meals))
}


// show meal in the ui 
const getMeal = meals => {
    if (meals == null) {
        alert('Please Enter a Valid Name')
    } else {
        const mealContainer = document.getElementById('mealContainer');
        meals.forEach(element => {
            const mealDiv = document.createElement('div');
            const createHtml = `
            <img onclick="getDetails('${element.strMeal}')" src='${element.strMealThumb}' />
            <h5>${element.strMeal}</h5>
        `
            mealDiv.innerHTML = createHtml;
            mealDiv.className = 'dynamic-container'
            mealContainer.appendChild(mealDiv);
        });
    }
}

// get url for details
const getDetails = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.meals))
    document.getElementById('detail-parent').innerHTML = '';
}


// show details in the ui
const showDetails = meals => {
    const detailParent = document.getElementById('detail-parent');
    meals.forEach(element => {
        const detailDiv = document.createElement('div');
        const createHtml = `
            <img src='${element.strMealThumb}' />
            <h5>${element.strMeal}</h5>
            <li>${element.strIngredient1}</li>
            <li>${element.strIngredient2}</li>
            <li>${element.strIngredient3}</li>
            <li>${element.strIngredient4}</li>
            <li>${element.strIngredient5}</li>
            <li>${element.strIngredient6}</li>
            <li>${element.strIngredient7}</li>
            <li>${element.strIngredient8}</li>
            <li>${element.strIngredient9}</li>
            <li>${element.strIngredient10}</li>
        `
        detailDiv.innerHTML = createHtml;
        detailDiv.className = 'dynamic-parent'
        detailParent.appendChild(detailDiv);

    });
}

