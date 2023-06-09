document.getElementById('error-message').style.display = "none"
document.getElementById('errorMessage').style.display = "none"
const mealDetail = document.getElementById('meal-details')
const searchResults = document.getElementById('search-result')



const firstletter = () => {
    const searchField = document.getElementById('searchField')
    const searchText = searchField.value
    searchField.value = ''

    if (searchText == '') {
        document.getElementById('error-message').style.display = "block"
        document.getElementById('errorMessage').style.display = "none"
        searchResults.innerHTML = ''
        mealDetail.textContent = ''

    }


    else {
        document.getElementById('error-message').style.display = "none"
        document.getElementById('errorMessage').style.display = "none"
        const url = `www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
        mealDetail.textContent = ''

    }
}

const displaySearchResults = (meals) => {

    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = ''

    if (meals == null) {
        document.getElementById('errorMessage').style.display = "block"
    }

    else {
        document.getElementById('errorMessage').style.display = "none"
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = ` 
             <a href="#meal-details"> <div onclick="loadMealDetails(${meal.idMeal})">    
                        <div class="">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                            </div>
                        </div>
                    </div></a>
                    `

            searchResult.appendChild(div)
        })
    }

}
const searchFood = () => {
    const searchField = document.getElementById('searchField')
    const searchText = searchField.value
    searchField.value = ''

    if (searchText == '') {
        document.getElementById('error-message').style.display = "block"
        document.getElementById('errorMessage').style.display = "none"
        searchResults.innerHTML = ''
        mealDetail.textContent = ''

    }


    else {
        document.getElementById('error-message').style.display = "none"
        document.getElementById('errorMessage').style.display = "none"
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResults(data.meals))
        mealDetail.textContent = ''

    }
}


const input = document.getElementById('searchField')
const enter = input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search-button").click()

    }
})



const displaySearchResult = (meals) => {

    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = ''

    if (meals == null) {
        document.getElementById('errorMessage').style.display = "block"

    }

    else {
        document.getElementById('errorMessage').style.display = "none"
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = ` 
             <a href="#meal-details"> <div onclick="loadMealDetail(${meal.idMeal})">    
                        <div class="">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                                     <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                            </div>
                        </div>
                    </div></a>
                    `

            searchResult.appendChild(div)
        })
    }

}

const loadMealDetail = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const loadMealDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (meal) => {
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    mealDetails.textContent = ' '
    div.classList.add('card')
    div.innerHTML = `  
   
     <img src="${meal.strMealThumb}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a class="btn btn-success" target="_blank" href="${meal.strYoutube}">Go Youtube</a>
    </div>
   `
    mealDetails.appendChild(div)
}

