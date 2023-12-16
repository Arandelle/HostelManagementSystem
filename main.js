'use strict';

const addEventOnElement = function(element, type, listener){
    if(element.length > 1){
        for(let i = 0; i < element.length; i++){            
        element[i].addEventListener(type, listener);
        }
    }
    else{
        element.addEventListener(type, listener)
    }
}


//============ NAVBAR ===============//
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelector("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);

const closeNav = function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active")
}

addEventOnElement(navLinks, "clicks", closeNav);

// Adding the active class to the header
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 50){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active")
    }
});

// Tab Button
const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function(){
    lastClickedTabBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab)
function formVisibility(containerId) {

    var container = document.getElementById(containerId);
    var otherContainerId = containerId === 'loginContainer' ? 'signupContainer' : 'loginContainer';
    var otherContainer = document.getElementById(otherContainerId);

    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
        otherContainer.style.display = "none";

    } else {
        container.style.display = "none";
    }
    event.preventDefault();

}


function toggleIcon(iconId) {
    var icon = document.getElementById(iconId);
    icon.classList.toggle('heart-filled');
    icon.setAttribute('name', icon.classList.contains('heart-filled') ? 'heart' : 'heart-outline');
}

function showPass(passwordId) {
    var passwordInput = document.getElementById(passwordId);
    var eyeIcon = passwordInput.nextElementSibling.querySelector('.eye-icon');

    if (passwordInput.type === 'password' || passwordInput.type === '') {
        passwordInput.type = 'text';
        eyeIcon.name = 'eye';
    } else {
        passwordInput.type = 'password';
        eyeIcon.name = 'eye-off';
    }
    passwordInput.focus();
}

function Login(event) {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password-login').value;
    var accountType = document.getElementById('accountSelect').value;

    if (accountType === 'admin' && email === '2020100' && password === '123') {
        alert('Admin login successful.');
        window.location.href = 'admin.html';

    } else if (accountType === 'student' && email === '1010100' && password === '123') {
        alert('Student login successful');
        window.location.href = 'user.html';
    } else {
        alert('Invalid user ID or Password');
    }
    event.preventDefault();
}

/**======SIDE BAR ========= */
function changeColor(element) {
    var navListItems = document.querySelectorAll("#navList .nav-item");

    navListItems.forEach(function (item) {
        item.classList.remove("board");
    });

    element.classList.add("board");
}
function changeColors(element) {
    var navListItems = document.querySelectorAll("#mealOptions .nav-items");

    navListItems.forEach(function (item) {
        item.classList.remove("boards");
    });

    element.classList.add("boards");
}
function billsColors(element) {
    var navListItems = document.querySelectorAll("#billsOptions .bills-item");

    navListItems.forEach(function (item) {
        item.classList.remove("bills-board");
    });

    element.classList.add("bills-board");
}

function show(sectionId) {
    var sections = document.querySelectorAll(".features");

    sections.forEach(function (section) {
        section.classList.add("hide");
    });

    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove("hide");

}
/** =============Profiles ============*/
/*
function enableEdit(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.removeAttribute('disabled');
    inputElement.focus();
  }*/
function Edit() {
    const inputs = document.querySelectorAll('.profile .input');
    const isDisabled = inputs[0].disabled;

    inputs.forEach(input => {
        input.disabled = !isDisabled;
    });
}

function saveChanges() {
    const inputs = document.querySelectorAll('.profile .input');

    inputs.forEach(input => {
        input.disabled = true;
    });
}

/*=========================Adding Rooms====================== */
function addRoom() {
    // Get form inputs
    var roomName = document.getElementById('roomName').value;
    var roomSize = document.getElementById('size').value;
    var roomBed = document.getElementById('beds').value;
    var imgInput = document.getElementById('img');
    var price = document.getElementById('price').value;

    // Mocking the roomStatus for illustration
    var roomStatus = 'occupied';

    // Check if an image is selected
    if (imgInput.files.length > 0) {
        // Create a new FileReader
        var reader = new FileReader();

        // Set the callback for when the file is loaded
        reader.onload = function (e) {
            // Create a new room container
            var newRoom = document.createElement('div');
            newRoom.className = 'room';
            newRoom.innerHTML = `
                <img src="${e.target.result}" alt="Room Image">
                <label for="" class="roomName">${roomName}</label>
                <div class="roomDetails">
                    <label for="" class="roomDetails"><ion-icon name="cube-outline"></ion-icon>${roomSize}&nbspsqf</label>
                    <label for="" class="roomDetails"><ion-icon name="bed-outline"></ion-icon>${roomBed}&nbsp</label>
                    <label for="" class="roomDetails"><ion-icon name="pricetag-outline"></ion-icon>PHP&nbsp${price}</label>
                </div>
                <button onclick="showDetails('${roomStatus}', '${roomName}')">
                    ${roomStatus === 'occupied' ? 'View Details' : 'Room Info'}
                </button>
                <button onclick="editRoom(this)">
                    Edit
                </button>
            `;
            // Append the new room to the container
            var roomsContainer = document.getElementById('roomsContainer');
            roomsContainer.appendChild(newRoom);
            var addRoomButton = document.querySelector('.addbtn');
            roomsContainer.insertBefore(addRoomButton, null);
        };
        // Read the file as a data URL
        reader.readAsDataURL(imgInput.files[0]);
    }

    // Clear the form fields after adding a room
    document.getElementById('roomName').value = '';
    document.getElementById('size').value = '';
    document.getElementById('beds').value = '';
    document.getElementById('img').value = '';
    document.getElementById('price').value = '';
    document.getElementById('roomStatus').value = 'available';
}

// Function to handle room editing
function editRoom(button) {
    var roomContainer = button.closest('.room');
    var labelsToEdit = roomContainer.querySelectorAll('.roomName, .roomDetails label');

    labelsToEdit.forEach(function (label) {
        label.contentEditable = !label.isContentEditable;
    });

    // Create and append a delete button if not already created
    var deleteButton = roomContainer.querySelector('.deleteButton');
    if (labelsToEdit[0].isContentEditable && !deleteButton) {
        var confirmDeleteButton = document.getElementById('confirmDelete');
        deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Room';
        deleteButton.className = 'deleteButton'; // Add a class to identify the delete button
        deleteButton.onclick = function () {
            formVisibility('deleteRoom');
            confirmDeleteButton.onclick = function () {
                deleteRoom(roomContainer);
                formVisibility('deleteRoom');
            };
        };
        roomContainer.appendChild(deleteButton);
    } else if (!labelsToEdit[0].isContentEditable && deleteButton) {
        // Remove the delete button when switching back to read-only state
        deleteButton.remove();
    }
    button.textContent = labelsToEdit[0].isContentEditable ? 'Save Changes' : 'Edit';
}

function deleteRoom(roomContainer) {
    // Implement the logic to delete the room as needed
    roomContainer.remove();
}

function showDetails(roomStatus, roomName) {
    // Implement details display based on roomStatus
    if (roomStatus === 'occupied') {
        alert(`Viewing details of occupied room: ${roomName}`);
        // Add code to display tenant details
    } else if (roomStatus === 'available') {
        alert(`Room info for available room: ${roomName}`);
        // Add code to display room information
    }
}

/*======Meal Management===== */

function editRow(link) {
    var row = link.closest('tr');
    var cellsToEdit = row.querySelectorAll('.editable');

    cellsToEdit.forEach(function (cell) {
        cell.contentEditable = !cell.isContentEditable;
        cell.classList.toggle('.editable');
    });

    // Change the link text to "Save" or "Edit" after editing
    link.textContent = cellsToEdit[0].isContentEditable ? 'Save' : 'Edit';

    // Remove the disabled attribute to make the link clickable again
    link.removeAttribute('disabled');

    // Enable or disable the file input based on the editable state
    var fileInput = row.querySelector('input[type="file"]');
    fileInput.disabled = !cellsToEdit[0].isContentEditable;

    // Clear the file input value when switching to editable state
    if (cellsToEdit[0].isContentEditable) {
        fileInput.value = '';
    }
}

function deleteRow(link) {
    var row = link.closest('tr');
    row.parentNode.removeChild(row);
}

function addRow() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(table.rows.length);

    // Insert cells with content
    for (var i = 0; i < 4; i++) {
        var cell = newRow.insertCell(i);
        cell.textContent = "Update Here";
        // Apply styling if needed
        cell.classList.add('editable');
    }

    // Add image cell with a unique imageId
    var rowIdx = table.rows.length;
    var uniqueImageId = 'newImage' + rowIdx;
    var imageCell = newRow.insertCell(0);
    imageCell.classList.add('items');
    imageCell.innerHTML = '<img id="' + uniqueImageId + '" src="" alt="">' +
        ' <a id="uploadLink' + rowIdx + '" class="action-link" onclick="document.getElementById(\'fileInput' + rowIdx + '\').click();">+</a>' +
        '<input type="file" id="fileInput' + rowIdx + '" accept="image/*" disabled onchange="updateImage(this, \'' + uniqueImageId + '\')">';

    // Add action cells
    var actionsCell = newRow.insertCell(5);
    actionsCell.innerHTML = '<a href="#" class="edit" onclick="editRow(this)">Edit</a>' +
        '<a href="#" class="delete" onclick="deleteRow(this)">Delete</a>';
}

function sideRow() {
    // This is for Side Dish Part
    var sidetable = document.getElementById("sideTable");
    var sidenewRow = sidetable.insertRow(sidetable.rows.length);

    // Insert cells with content
    for (var a = 0; a < 4; a++) {
        var sidecell = sidenewRow.insertCell(a);
        sidecell.textContent = "Update Here";
        // Apply styling if needed
        sidecell.classList.add('editable');
    }

    // Add image cell with a unique imageId
    var siderowIdx = sidetable.rows.length;
    var sideuniqueImageId = 'sidenewImage' + siderowIdx;
    var sideimageCell = sidenewRow.insertCell(0);
    sideimageCell.classList.add('items');
    sideimageCell.innerHTML = '<img id="' + sideuniqueImageId + '" src="" alt="">' +
        ' <a id="sideuploadLink' + siderowIdx + '" class="action-link" onclick="document.getElementById(\'sidefileInput' + siderowIdx + '\').click();">+</a>' +
        '<input type="file" id="sidefileInput' + siderowIdx + '" accept="image/*" disabled onchange="updateImage(this, \'' + sideuniqueImageId + '\')">';


    // Add action cells
    var sideactionsCell = sidenewRow.insertCell(5);
    sideactionsCell.innerHTML = '<a href="#" class="edit" onclick="editRow(this)">Edit</a>' +
        '<a href="#" class="delete" onclick="deleteRow(this)">Delete</a>';
}


function drinksRow() {
    // This is for drinks Dish Part
    var drinkstable = document.getElementById("drinksTable");
    var drinksnewRow = drinkstable.insertRow(drinkstable.rows.length);

    // Insert cells with content
    for (var b = 0; b < 4; b++) {
        var drinkscell = drinksnewRow.insertCell(b);
        drinkscell.textContent = "Update Here";
        // Apply styling if needed
        drinkscell.classList.add('editable');
    }

    // Add image cell with a unique imageId
    var drinksrowIdx = drinkstable.rows.length;
    var drinksuniqueImageId = 'drinksnewImage' + drinksrowIdx;
    var drinksimageCell = drinksnewRow.insertCell(0);
    drinksimageCell.classList.add('items');
    drinksimageCell.innerHTML = '<img id="' + drinksuniqueImageId + '" src="" alt="">' +
        ' <a id="drinksuploadLink' + drinksrowIdx + '" class="action-link" onclick="document.getElementById(\'drinksfileInput' + drinksrowIdx + '\').click();">+</a>' +
        '<input type="file" id="drinksfileInput' + drinksrowIdx + '" accept="image/*" disabled onchange="updateImage(this, \'' + drinksuniqueImageId + '\')">';

    // Add action cells
    var drinksactionsCell = drinksnewRow.insertCell(5);
    drinksactionsCell.innerHTML = '<a href="#" class="edit" onclick="editRow(this)">Edit</a>' +
        '<a href="#" class="delete" onclick="deleteRow(this)">Delete</a>';
}

function updateImage(input, imageId) {
    var row = input.closest('tr');
    var isEditable = row.querySelector('.editable').isContentEditable;

    // Only update the image if the row is in an editable state
    if (isEditable) {
        var image = document.getElementById(imageId);

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                image.src = e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
}

function incrementQuantity(productId) {
    var quantityInput = document.getElementById(productId);
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity(productId) {
    var quantityInput = document.getElementById(productId);
    var newValue = parseInt(quantityInput.value) - 1;
    quantityInput.value = newValue >= 1 ? newValue : 1;
}

function mealOptions() {
    var mealOptions = document.getElementById('mealOptions');
    mealOptions.style.display = (mealOptions.style.display === 'none') ? 'block' : 'none';
}
function billsOptions() {
    var billsOptions = document.getElementById('billsOptions');
    billsOptions.style.display = (billsOptions.style.display === 'none') ? 'block' : 'none';

}

function showOrders(){
    alert("This shows the list of orders");
}

/*================= feedbacks ==========*/
function formVisibility(formId, replyLink) {
    var form = document.getElementById(formId);

    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';

        if (replyLink) {
            var rowIndex = replyLink.closest('tr').getAttribute('data-rowindex');
            var replyLabel = document.getElementById('replyLabel');
            replyLabel.innerText = 'Reply to: ' + rowIndex;
        }
    }
}

function updateStatusAndCloseForm() {

    // Update the status of the corresponding row (this is a placeholder, replace it with your logic)
    var rowIndex = document.getElementById('replyLabel').innerText.split(' ')[2];
    var statusCell = document.querySelector(`#feebacksTable tr[data-rowindex="${rowIndex}"] td[data-status]`);
    var messageCell = document.querySelector(`#feebacksTable tr[data-rowindex="${rowIndex}"] td[data-message]`);

    if (statusCell) {
        statusCell.style.color = 'green';
        statusCell.innerText = 'Done';
    }
    if (messageCell) {
        messageCell.style.color = 'hsl(202, 86%, 51%)';
        messageCell.innerText = "*Message Sent";
    }

    formVisibility('reply');

}
var rows = document.querySelectorAll('#feebacksTable tr');

// Loop through each row and check its current status
for (let i = 0; i < rows.length; i++) {
    var row = rows[i];
    var statusCell = row.querySelector('td[data-status]');
    if (statusCell && statusCell.textContent === 'Pending') {

        row.querySelector('td[data-status]').textContent = 'Done';
    }
}

/** ======== Payments ================*/
var found = false; // Initial state
function searchItem() {
    var searchInput = document.getElementById('searchInput').value;
    var itemDetails = document.getElementById('itemDetails');
    var paymentAmount = document.getElementById('paymentAmount');
    var invalid = document.getElementById('invalidAmount');
    var success = document.getElementById('success');
    var notFound = document.getElementById('notFound');

    // Replace with your actual data fetching logic based on order number
    var orderData = getOrderData(searchInput);

    // Check if order data found
    if (orderData) {
        // Update item details container
        itemDetails.innerHTML = generateReceiptHtml(orderData);

        // Enable payment input
        paymentAmount.disabled = false;

        // Attach click event to the "Proceed Payment" button
        document.getElementById('payment').onclick = function () {
            proceedPayment(orderData, paymentAmount, itemDetails, invalid, success, notFound);
        };
        found = true;
    } else {
        // Display not found message
        itemDetails.innerHTML = 'Order not found'
        paymentAmount.disabled = true;
        found = false;
    }
}

function proceedPayment(orderData, paymentAmount, itemDetails, invalid, success, notFound) {
    // Validate payment and update receipt
    var payment = parseFloat(paymentAmount.value);
    if (isNaN(payment)) {

        notFound.style.display = "block";
        setTimeout(function () {
            notFound.style.display = "none";
        }, 1500);
    }
    else {
        // Calculate change and update item details with final receipt
        var total = orderData.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        var change = payment - total;

        if (payment < total || payment < 0 || payment < orderData.total) {

            invalid.style.display = "block";
            setTimeout(function () {
                invalid.style.display = "none";
            }, 1500);
        } else {
            // Update item details with final receipt
            itemDetails.innerHTML = generateReceiptHtml(orderData, payment, change);

            paymentAmount.disabled = true;
            paymentAmount.value = "";
            success.style.display = "block";
            setTimeout(function () {
                success.style.display = "none";
            }, 1500);
        }
    }
}

function generateReceiptHtml(orderData, payment, change) {

    var html = `
      <table class="table">
        <tr>
          <th colspan="4" class="title">${orderData.shopName}</th>
        </tr>
        <tr>
          <th class="title-heads">Order #</th>
          <td>${orderData.orderNumber}</td>
          <th class="title-heads">Date/Time</th>
          <td>${orderData.date}</td>
        </tr>
        <tr>
          <th class="title-head">ITEM</th>
          <th class="title-head">PRICE</th>
          <th class="title-head">QTY</th>
          <th class="title-head">SUBTOTAL</th>
        </tr>`;

    var total = 0; // Initialize total

    for (var item of orderData.items) {
        var subtotal = item.price * item.quantity;
        total += subtotal; // Add subtotal to total

        html += `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${subtotal}</td>
        </tr>
      `;
    }

    var paymentDisplay = payment < total ? "" : payment;

    html += `
        <tr class"totalrow">
          <td class="total"></td>
          <th class="total totals a">Total:</th>
          <th class="total"></th>
          <th class="total a">${total}</th>
        </tr>
        <tr class"totalrow">
          <th class="total"></th> 
          <th class="total totals b" >Payment:</th>
          <th class="total"></th>
          <th class="total b">${paymentDisplay}</th>
        </tr>
        <tr>
        <th class="total"></th>
        <th class="total totals c" >Change:</th>
        <th class="total"></th>
        <th class="total b">${change}</th>
        </tr>
      </table>
    `;

    return html;
}

function getOrderData(orderNumber) {
    // This is just a hardcoded example for illustration purposes
    var orders = {
        "123456": {
            shopName: "Heaven Scent's Receipt",
            orderNumber: "123456",
            date: "2023-01-01 12:00 PM",
            items: [
                { name: "Chicken", price: 20, quantity: 2 },
                { name: "Fries", price: 30, quantity: 1 },
            ],
        },

        "123": {
            shopName: "Heaven Scent's Receipt",
            orderNumber: "123",
            date: "2023-01-01 12:00 PM",
            items: [
                { name: "Egg", price: 10, quantity: 5 },
                { name: "Burger", price: 40, quantity: 3 },
            ],
        },
    };
    if (orders.hasOwnProperty(orderNumber)) {
        return orders[orderNumber];
    } else {
        // Return null or some indication that the order was not found
        return null;
    }
}

function printReceipt() {
    // Clone the receipt content
    var receiptContent = document.getElementById('itemDetails').cloneNode(true);
    // Create a new window for printing
    var printWindow = window.open('', '_blank');
    // Append the receipt content to the new window
    printWindow.document.body.appendChild(receiptContent);
    // Print the window
    printWindow.print();
    // Close the new window after printing
    printWindow.onafterprint = function () {
        printWindow.close();
    };
}






