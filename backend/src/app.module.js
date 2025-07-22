import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [StudentsModule, TeachersModule, ClassesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
