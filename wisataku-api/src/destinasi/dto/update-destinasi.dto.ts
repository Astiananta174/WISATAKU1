import { PartialType } from '@nestjs/swagger';
import { CreateDestinasiDto } from './create-destinasi.dto';

// PartialType membuat seluruh field dari CreateDestinasiDto menjadi opsional.
// Ini sangat cocok untuk endpoint HTTP PATCH di mana user hanya ingin mengubah sebagian data.
export class UpdateDestinasiDto extends PartialType(CreateDestinasiDto) {}