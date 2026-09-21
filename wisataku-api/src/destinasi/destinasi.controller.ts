import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('destinasi')
@Controller('destinasi')
export class DestinasiController {
  
  @Get()
  @ApiOperation({ summary: 'Menampilkan seluruh daftar destinasi wisata' })
  @ApiResponse({ status: 200, description: 'Berhasil mengambil daftar destinasi.' })
  findAll() {
    return [
      { id: 1, nama: 'Candi Borobudur', kategori: 'Sejarah', hargaTiket: 50000 },
      { id: 2, nama: 'Pantai Parangtritis', kategori: 'Alam', hargaTiket: 15000 },
    ];
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi wisata baru' })
  @ApiResponse({ status: 201, description: 'Destinasi wisata berhasil dibuat.' })
  @ApiResponse({ status: 400, description: 'Input data tidak valid.' })
  create(@Body() createDestinasiDto: CreateDestinasiDto) {
    return {
      message: 'Destinasi berhasil ditambahkan (Dummy Data)',
      data: { id: Date.now(), ...createDestinasiDto },
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail destinasi berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID Destinasi', example: 1 })
  @ApiResponse({ status: 200, description: 'Detail destinasi ditemukan.' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
      nama: 'Candi Borobudur',
      kategori: 'Sejarah',
      hargaTiket: 50000,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mengubah sebagian data destinasi wisata' })
  @ApiParam({ name: 'id', description: 'ID Destinasi', example: 1 })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diperbarui.' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDestinasiDto: UpdateDestinasiDto,
  ) {
    return {
      message: `Destinasi dengan ID ${id} berhasil diperbarui (Dummy Data)`,
      updatedData: updateDestinasiDto,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi wisata' })
  @ApiParam({ name: 'id', description: 'ID Destinasi', example: 1 })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus.' })
  @ApiResponse({ status: 404, description: 'Destinasi tidak ditemukan.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `Destinasi dengan ID ${id} berhasil dihapus (Dummy Data)`,
    };
  }
}