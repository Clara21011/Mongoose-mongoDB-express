const {Schema, model} = require('mongoose');

/*- id: Puede ser un identificador numero o un uuid.
- title: El titulo del blog. Un string
- body: El contenido
- author: Por ahora que tenga el nombre de quien lo creo.
- created_at: fecha de creacio*/

const BlogSchema = new Schema({
    id:{
        type: String, 
        required: true, 
        trim: true, //elimina espacios
    },

    title: {
        type: String,
        required: true,
    },

    body: {
        type: String, 
        required: true,

    },

    created_at: {
        type: String, 
        required: null,
    },
});

module.exports = model('Blogs', BlogSchema);

//para poder importar en otros lugares