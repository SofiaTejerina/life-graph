class ErrorHandlerMiddleware {
    static handle(err, _req, res, _) {
        let message;
        let status;

        switch (true) {
            default:
                status = 500;
                message = 'Unknown Error';
                console.error('Unknown error: ', err);
        }

        return res.status(status).send({ message });
    }
}

export default ErrorHandlerMiddleware;