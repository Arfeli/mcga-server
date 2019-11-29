module.exports = {
    create:  (req,res) => {
        return "not implemented";
    },
    edit: (req,res) => {
        return "not implemented";
    },
    show : (req,res) => {
        return "not implemented";
    },
    _delete: (req,res) => {
        return "not implemented";
    },
    index:(req,res) => {
        res.status(200).json({
            "resource": "Todo",
            "message": "You requested todo list data",
            "data" : []
        });
    }
};
