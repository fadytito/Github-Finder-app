// Instantiate Github object
const github = new Github;

// Instantiate Ui object
const ui = new Ui;

// Define input element
const searchUser = document.getElementById('searchUser');

// Add event listener to search field
searchUser.addEventListener('keyup', getUser);

// Create getUser function
function getUser(e) {
    // Get input value
    userSearchValue = e.target.value;

    // Check if the input is filled in or empty
    if (userSearchValue !== '') {
        // fecth data
        github.fetchUser(userSearchValue)
            .then(data => {
                if (data.profile.message !== 'Not Found') {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);

                } else {
                    ui.showAlert('User not found', 'alert alert-danger');
                }
            })
            .catch(err => ui.showAlert('Something went wrong!', 'alert alert-danger'));

    } else {
        // Clear all data once search input is empty
        ui.clearProfile();
    }

}