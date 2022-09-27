const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.1a8b90f.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    nome: {
        type: String,
        unique: true,
    },
    produtora: String,
    duracao: String,
    ano: Number,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};