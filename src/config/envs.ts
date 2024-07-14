import "dotenv/config";
import * as joi from "joi"

interface EnvVars {
    PORT: number
}


const envVarsSchema = joi.object<EnvVars>({
    PORT: joi.number().required(),
}).unknown().required()

const { error, value } = envVarsSchema.validate(process.env)
if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

const envVars: EnvVars = value

export const envs = {
    port: envVars.PORT,
} 