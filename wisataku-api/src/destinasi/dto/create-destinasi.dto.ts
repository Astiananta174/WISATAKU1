import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDestinasiDto {
  @ApiProperty({
    description: 'Nama tempat wisata',
    example: 'Candi Borobudur',
  })
  @IsString()
  @IsNotEmpty()
  nama: string;

  @ApiProperty({
    description: 'Kategori wisata',
    example: 'Sejarah & Budaya',
  })
  @IsString()
  @IsNotEmpty()
  kategori: string;

  @ApiProperty({
    description: 'Harga tiket masuk dalam Rupiah',
    example: 50000,
  })
  @IsNumber()
  @Min(0)
  hargaTiket: number;
}