<a name="readme-top"></a>

# WanderPal Tours

# Application 
<!-- <img src="../wanderpal-frontend/src/assets/user.png" width="1000" height="500"> -->
![Wanderpal Image](../wanderpal-frontend/src/assets/wanderpal.png)



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

**WanderPal Tours Front-End** The following  provides a brief overview of what the "WanderPal Tours Front-End" app is all about:

The app is built using React with Vite, which are technologies used for creating web applications. React is a popular JavaScript library for building user interfaces, and Vite is a build tool that enhances the development experience.

The primary functionality of the app is to allow users to book reservations for tours. To access this functionality, users need to be logged in, suggesting that there's likely a user authentication system in place.

The app supports different types of requests that users can execute. These requests include creating, retrieving (getting), and deleting reservations and items. This indicates that the app has a comprehensive set of features related to managing reservations and items associated with tours.

In essence, the "WanderPal Tours Front-End" app appears to be a web application that serves as the user interface for booking tours. It is built using React and Vite, and it offers various functionalities like logging in, creating reservations, getting reservation details, deleting reservations, and managing items related to the tours. The anchor tag mentioned at the beginning might indicate that more detailed information about the project can be found in a section labeled "About Project" within the webpage. 

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

## Kanban Board

### Current state

[Link to the Kanban Board](https://github.com/users/danielamoreno699/projects/1)

### Initial State

![image](./app/assets/initial%20state.png)

<br>

### Key Features <a name="key-features"></a>

- **Public and Private Routes on the navigation panel:** The application employs a navigation panel that includes both public and private routes. Private routes are restricted and can only be accessed by logged-in users. The home page and other sections are accessible only when the user is logged in, ensuring that certain content is protected and reserved for authenticated users.

- **Registration component:** WanderPal includes a registration component that facilitates user registration. Users can create an account through an API call. During registration, users provide their name, which is then associated with a specific ID in the database. This component essentially manages the user creation process.

- **Login component:** The app features a login component responsible for authenticating users. It compares the name input provided by the user with the names already registered in the database. Successful authentication grants access to the application's features.

- **Home component:** WanderPal includes a home component that retrieves and displays all available items from the database. This component likely serves as the main page users see upon logging in. Users can navigate to other sections, such as the details component, from this page via buttons or links.

- **Details component**: The details component offers additional information about a selected item. It displays details like descriptions and prices related to the chosen item. Moreover, it allows users to make a reservation for the specific item through a dedicated button. 

- **Delete component**: This component provides users with the ability to delete items. It likely lists all available items and offers a delete button for each item. This feature empowers users to manage the content they have access to. 

- **Reservation form component from navbar**: The navigation panel includes a reservation form component. Users can directly create a reservation from this form, selecting the tour they wish to reserve. When a reservation is made, a new reservation item is generated and stored.

- **Reservation component**: The reservation component showcases all reservations created by a user. Users are given the option to delete their reservations. This functionality allows users to review and manage their reservations easily.

- **Item form component**: The app incorporates an "add-item" form component. Users can utilize this form to create new items. By inputting the required values, users can create and add new content to the application.

- **Reservation form component from details page**:  In addition to the reservation form in the navigation panel, the details page also features a reservation form. This enables users to create reservations directly from the details page of a selected item.

- **Reducer/Redux**: The application employs Redux, a state management library, to handle API calls. The reducers within Redux manage the different types of data payloads exchanged between the application and the APIs. This helps maintain a predictable and organized flow of data.

- **User-Friendly Interface:** WanderPal prides itself on offering a user-friendly interface. This design approach ensures that users can easily navigate through the application's various features without encountering unnecessary complexity.

- **Responsive design:** The app boasts a responsive design that adapts to different screen sizes and media queries. This responsiveness ensures a seamless user experience across various devices, including smartphones, tablets, and desktops.

In summary, the "WanderPal" application encompasses a range of components and features designed to provide users with a comprehensive and user-friendly experience. From user registration to item management, reservations, and responsive design, the app aims to deliver a cohesive and accessible platform for users interested in booking tours and managing related content.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Backend Repository Link
<a href="https://github.com/danielamoreno699/WanderPal">WanderPal backend</a>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have Ruby installed on your system. You can check by running the code below in your terminal.
```sh
  ruby --version
```
Ensure to clone backend repository in order to run the database


```sh
  cd Wanderpal

  Run bundle install to install all the gems and dependencies
  Run migrations to create migrations on DB on Postgress
```


### Setup

Clone or download this repository to your local machine.
```sh
  
  git clone https://github.com/danielamoreno699/wanderpal-frontend
```
Open your terminal and navigate to the cloned project directory.

### Install

- Install this project with:

```sh
  cd wanderpal-frontend

  npm install or npm i
```

### Usage

To run the project, execute the following command:

```sh
  npm run dev

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Salman Ahmar**

- [GitHub](https://github.com/fpsapc)
- [LinkedIn](https://www.linkedin.com/in/salman1987/)

👤 **Felipe Haybar**

- [GitHub](https://github.com/Feliverse)
- [LinkedIn](https://www.linkedin.com/in/felipehaybar/)

👤 **Daniela Moreno**

- GitHub: [@daniela](https://github.com/danielamoreno699)
- LinkedIn: [Daniela Moreno](https://www.linkedin.com/in/daniela-moreno-06a139124/)

👤 **Jules Edozie**

- GitHub: [@Jules Edozie](https://github.com/julzedz)
- LinkedIn: [Jules Edozie](https://www.linkedin.com/in/jules-edozie-b59b94234/)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

-**Add a robust authentication for the user login** .
-**Display additional Item information** .
-**Improve css design** .

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions to the User Interface are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the project repository.

Feel free to check the [issues page](https://github.com/danielamoreno699/WanderPal/issues).


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give us a star ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Special thanks to our team who made possible the completion of this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE.md) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
