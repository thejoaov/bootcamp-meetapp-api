export default function redisConfig() {
  if (process.env.NODE_ENV === 'development') {
    return {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    };
  }
  return { uri: process.env.REDIS_URL };
}
