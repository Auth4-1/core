
const initLogger = (outputFilePath, serviceName) => {
    const winston = require('services/utils/logger/winston');

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: {service: serviceName},
        transports: [
            new winston.transports.File({filename: outputFilePath})
        ]
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
    }
    return logger
};

exports = {
    initLogger
};
