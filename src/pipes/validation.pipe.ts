import { Injectable } from "@nestjs/common";
import { PipelineTransform } from "stream";


@Injectable()
export class ValidationPipe implements PipelineTransform