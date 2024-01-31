module.exports = {

    // ==================================
    //  ======= Staff APIs ==========
    // ==================================
    "/staff": require('./api/staff/create-list.json'),
    "/staff/current": require('./api/staff/current.json'),
    "/staff/password/{id}": require('./api/staff/edit-password.json'),
    "/staff/{id}": require('./api/staff/get-one-update-delete.json'),

    // ==================================
    //  ======= Employee APIs ==========
    // ==================================
    "/employee": require('./api/game/create-list.json'),
    "/employee/{id}": require('./api/game/get-one-update-delete.json'),
    
};