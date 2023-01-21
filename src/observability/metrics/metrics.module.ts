import { PrometheusService } from './../prometheus/prometheus.service';
import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { HealthModule } from 'src/observability/health/health.module';
import { PrometheusModule } from '../prometheus/prometheus.module';

@Module({
  imports: [PrometheusModule, HealthModule],
  providers: [MetricsService, PrometheusService],
  controllers: [MetricsController],
})
export class MetricsModule {}
