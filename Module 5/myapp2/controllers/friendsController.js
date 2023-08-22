const friends = require('../models/friends')

const getAllFriends = (res) => {
    res.json(friends)
}

const filterFriends = (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let startLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }
    if (startLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.toUpperCase().startsWith(startLetter.toUpperCase()));
    }
    
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: "No friends matching gender "+filterGender+' and letter '+startLetter})
    }    
}

const getHeaderInfo = (req, res) => {
    console.log(req.headers)
    // TODO - modify this object to just return info on the user-agent, content-type and host

    const goodHeaders = {host: req.headers.host, 'user-agent': req.headers['user-agent'], 'content-type': req.headers['content-type'], accept: req.headers.accept};
    res.json(goodHeaders)    
}

const getSingleFriend = (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path
    let matchedFriend = friends.find(friend => friend.id == friendId);

    // if we found a friend with the given ID, return their data
    if (matchedFriend) {
        res.status(200).json(matchedFriend)
    } else {
        // otherwise, return a 'not found' error
        res.status(404).json({error: 'Friend with id '+friendId+' does not exist'})
    }    
}

const addNewFriend = (req, res) => {
    let newFriend = req.body;
    console.log(req.body)

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1
    }

    // if the new friend is valid, add them to the list and return the successful object
    friends.push(newFriend)
    res.status(200).json(newFriend)
}

const updateFriend = (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    // verify the contents of updatedFriend
    // replace the old friend data for friendId with the new data from updatedFriend
    let oldFriend = friends.find(friend => friend.id == friendId)
    if (oldFriend) {
        let oldIndex = friends.indexOf(oldFriend)

        let newFriend = {...oldFriend, ...updatedFriend}
        friends.splice(oldIndex, 1, newFriend)

        res.status(200).json(newFriend)
    }
    else { 
        res.status(500).json({error: 'Friend with id '+friendId+' not found'});
    }    
}

module.exports = {
    getAllFriends, filterFriends, getHeaderInfo, getSingleFriend, addNewFriend, updateFriend
};