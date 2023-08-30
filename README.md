<a name="readme-top"></a>

# Collectify: Your Personal Catalog

# Application 
<img src="https://github.com/microverseinc/curriculum-ruby/blob/main/group-capstone/images/catalog_of_my_things.png">


<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
  - [Key Features](#key-features)
  - [🚀 Presentation](#presentation)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
 - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📚🎵🎮 WanderPal Tours Front-End <a name="about-project"></a>

**WanderPal Tours Front-End** is an app build on react vite that allows users to book reservations for tours once the user is Logged in. The user can execute different type of requests. Like create, get and delete reservations and items.  

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.ruby-lang.org">Ruby</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Public and Private Routes on the navigation panel:** Wanderpal contains private routes. The home page and other sections are only accessible when the user is logged in.

- **Registration component:** Wanderpal contains a registration component which allows the user creation through the api call. The user only types the name and the name will be assigned to a specific id in the database. 

- **Login component:** The app includes a login component which is in charge of comparing the value of the name input field with the names already created in the database to allow access to the application.

- **Home component:** The app includes a home component which retrieves all the items avaiable from the database and display them for the user. from  this component, the user can navigate to the details component through a button.  

- **Details component**: The app includes an detail component,  which display all the details related to  the item that has been selected.  It displays additional information for the user like description and prices. Also it has a button to make reservation for that specific item.  

- **Delete component**: The app includes an delete component which displays all the items available with a delete button. So  the user is able to delete the selected item. 

- **Reservation form component from navbar**: The app includes a reservation form. The user can create a reservation from the navigation link directly. where he can select the tour he wants to reserve. once he makes the reservation, a new reservation item is created.

- **Reservation component**: The app includes a reservation component, which displays all the reservations created by the user. Also the user is allowed to  delete the reservation. 

- **Item form component**: The app includes an add-item  form component, where the user can create new items by placeing in the input the required values for the item creation.

- **Reservation form component from details page**: The app includes a reservation form that is located in the details page, where the user can create a new reservation from the selected item.

- **Reducer/Redux**: The app makes the different api calls through the redux feature. The reducers handles the different type of payload that is carried out by the api 

- **User-Friendly Interface:** The app features offers a simple and intuitive user interface, where the user can navigate very easyly through the different features.

- **Responsive designe:** The app has a responsive design on different media queries .

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have Ruby installed on your system. You can check by running the code below in your terminal.
```sh
  ruby --version
```
### Setup

Clone or download the Collectify repository to your local machine.
```sh
  git clone https://github.com/christianonoh/ruby-capstone.git
```
Open your terminal and navigate to the cloned project directory.

### Install

This project does not require additional dependencies, just Ruby interpreter. However, it uses RuboCop as a linter and you should set it up as well.

```sh
bundle install
```

### Usage
 - To run Collectify, execute the `main.rb file`:

```sh
  ruby main.rb
```
The console app will present a menu of options for managing and interacting with your collections. Simply follow the prompts and provide the necessary information when prompted. The program will process and output your request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Christian Onoh**

- GitHub: [@christianonoh](https://github.com/christianonoh)
- LinkedIn: [Christian Onoh](https://www.linkedin.com/in/christianonoh)

👤 **Daniela Moreno**

- GitHub: [@daniela](https://github.com/danielamoreno699)
- LinkedIn: [Daniela Moreno](https://www.linkedin.com/in/daniela-moreno-06a139124/)

👤 **Jules Edozie**

- GitHub: [@Jules Edozie](https://github.com/julzedz)
- LinkedIn: [Jules Edozie](https://www.linkedin.com/in/jules-edozie-b59b94234/)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **User Interface**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions to the User Interface are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the project repository.

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give us a star ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Special thanks to our team and the Ruby community for their support and contributions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
