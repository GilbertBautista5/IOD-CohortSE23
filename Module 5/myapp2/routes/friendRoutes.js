const express = require("express");
const friendsController = require('../controllers/friendsController')

const router = express.Router();

// default endpoint, gets all friends
router.get('/', (req, res) => {
    friendsController.getAllFriends(res)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
router.get('/filter', (req, res) => {
    friendsController.filterFriends(req, res);
})

// gets information about this request from the headers
router.get('/info', (req, res) => {
    friendsController.getHeaderInfo(req, res);
})

// dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get('/:id', (req, res) => {
    friendsController.getSingleFriend(req, res);
})

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    friendsController.addNewFriend(req, res);
})

// TODO - move logic out into a controller with functions for filtering, finding, adding

// TODO - try completing this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    friendsController.updateFriend(req, res)
})

module.exports = router;