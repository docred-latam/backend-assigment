import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemsModule } from './modules/problems/problems.module';
import { AgentsModule } from './modules/agents/agents.module';
import { TypegooseModule } from "nestjs-typegoose";
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from "./config/configuration";

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService:ConfigService) => ({
        uri: configService.get('databaseMongodb'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ProblemsModule,
    AgentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
