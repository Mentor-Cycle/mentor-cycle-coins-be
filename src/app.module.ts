import { HttpModule } from '@nestjs/axios';
import { MetricsModule } from './observability/metrics/metrics.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VolunteerModule } from './volunteer/volunteer.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TeamModule } from './team/team.module';
import configuration from './config/configuration';
import { HealthModule } from './observability/health/health.module';
import { PrometheusModule } from './observability/prometheus/prometheus.module';

@Module({
  imports: [
    PrometheusModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.uri'),
      }),
      inject: [ConfigService],
    }),
    VolunteerModule,
    TeamModule,
    HealthModule,
    MetricsModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
