export const isDev = process.env.NODE_ENV === 'development';

export const DB_URL = isDev ? 'mongodb://localhost:27017/instore-dev' : 'mongodb+srv://OkekeChidiebubePrince:Unityinchr!st1@cluster0.dxpmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';