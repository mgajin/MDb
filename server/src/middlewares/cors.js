// CORS middleware
export function cors(req, res, next) {
    res.header('Access-COntrol-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    next();
}