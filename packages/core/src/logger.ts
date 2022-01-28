export const createLogger = async(key: string, debug = false) => {
  try {
    const consola = (await import('consola')).default
    const logger = consola.withScope(key)
    if (debug) {
      // debug
      logger.level = 4
    }
    return logger
  }
  catch (e) {
    // no consola available, use console
  }
  return console
}
