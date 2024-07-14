import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config/envs';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  // const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  // }));
  // const config = new DocumentBuilder()
  //   .setTitle('Products Api')
  //   .setDescription('The products API description')
  //   .setVersion('1.0')
  //   .addTag('products')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);

  // SwaggerModule.setup('doc', app, document);
  // await app.listen(envs.port, () => {
  //   logger.log(`Server running on port ${envs.port}`);
  // });

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: envs.port
      }
    })
  await app.listen();

  logger.log(`Microservice is listening on port ${envs.port}`);
}
bootstrap();
