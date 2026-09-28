$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
        {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************
    

    //---- Element Removal ---- Task 1 **************************************
    // remove the text from username 
    $('#username').text('');
    //removing text from revenue amount using 
    $('.revenue-amt').text('');
    //removing text from number of customers
    $('#customer-num').text('');
    //removing text from number of orders
    $('#orders-amt').text('');
    //removing text from number of issues
    $('#issues-amt').text('');
    
    //removing all rows in Sales Summary with tbody tag
    $('#salesTableBody tr').remove()
    //removing all list items in Recent Activity list
    $('#activity-list li').remove()
    //removing all rows within tbody in recent customers section
    $('#customerTableBody tr').remove()

    //Remove all list items within system status section
    $('#system-status-list li').remove()

    //remove all list items within ol tag in notifications
    $('#notifications-list li').remove()
    //remove notifications counter
    $('#notification-num').text('')
    //remove all list items from tasks section
    $('#tasks-list li').remove()

    //---- FUNCTIONS ---- Task 2 **************************************
    //function to get username dynamically
    function getUsername() {
        $('#username').text(username);
    }
    getUsername();
    //function to get revenue amount dynamically
    function getRevenue() {
        $('.revenue-amt').text(revenueAmt);
    }
    getRevenue();
    //function to get number of customers dynamically
    function getCustomerCount() {
        $('#customer-num').text(customerNum);
    }
    getCustomerCount();
    //function to get number of orders dynamically
    function getOrderCount() {
        $('#orders-amt').text(ordersAmt);
    }
    getOrderCount();
    //function to get number of issues dynamically
    function getIssueCount() {
        $('#issues-amt').text(issuesAmt);
    }
    getIssueCount();

    //function to add rows in sales table
    var saleRow = $('#salesTableBody');
    function getSalesRows() { 
        sales.forEach(sales => {
            saleRow.append(`<tr><td>${sales.product}</td><td>${sales.quantity}</td><td>${sales.revenue}</td></tr>`);
        });
    }
    getSalesRows();

    //function to add list items in recent activity
    var activityList = $('#activity-list');
    function getRecentActivity() {
        activities.forEach(activity => {
            activityList.append(`<li>${activity.message}</li>`);
        });
    }
    getRecentActivity();

    //function for rows in recent customers
    var customerRow = $('#customerTableBody');
    function getCustomers(){
        customers.forEach(customer =>{
            customerRow.append(`<tr><td>${customer.name}</td><td>${customer.email}</td><td>${customer.status}</td><td>${customer.joined}</td></tr>`);
        });
    }
    getCustomers();

    //function for system status
    var systemStatusList = $('#system-status-list');
    function getSystemStatus() {
        messages.forEach(status => {
            systemStatusList.append(`<li>${status.messsage}</li>`);
        });
    }
    getSystemStatus();

    //function for notifications
    var notificationsList = $('#notifications-list');
    function getNotis(){
        notifications.forEach(noti =>{
            notificationsList.append(`<li>${noti.messsage}</li>`);
        })
    }
    getNotis();

    //function to display notification counter
    function getNotiCounter(){
        $('#notification-num').text(notifications.length);
    }
    getNotiCounter();

    //function to display tasks dynamically
    var tasksList = $('#tasks-list');
    function getTasks(){
        tasks.forEach(task => {
            tasksList.append(`<li>${task.messsage}</li>`);
        })
    }
    getTasks();

    //---- JQuery UI ---- Task 3 **************************************

    //changing html buttons to jQuery UI buttons
    $('button').button();

    //changing dashboard tabs to jQuery UI tabs
    $('#dashboardTabs').tabs()

    //changing customerDialog to jQuery UI dialog
    $('#customerDialog').dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
        "Create Customer": function () {
            var name = $("#customerName").val();
            var email = $("#customerEmail").val();
            if (!name || !email) {
                alert(
                "Please enter a name and email."
                );
                return;
            }

            alert("Customer created: " + name);
            $(this).dialog("close");
            },
            "Cancel": function () {
            $(this).dialog("close");
            }
        }
    });

    //
    $('accordion').accordion({
        collapsible: true,
        heightStyle: "content"

    }
    );


});

