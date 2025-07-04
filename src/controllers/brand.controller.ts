import { Request, Response, NextFunction } from 'express';
import BrandService from '../services/brand.service';
import { dtoMapper } from './dtoMapper';

export async function updateBrand(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { brandId } = req.params;
    const { name, label } = req.body;

    if (!brandId) {
      res.status(400).json({ message: 'Brand ID is required' });
      return;
    }

    if (!name || !label) {
      res.status(400).json({ message: 'Name and label are required' });
      return;
    }

    const result = await BrandService.updateBrand(Number(brandId), name, label);
    res.status(200).json({ id: result });
    return;
  } catch (error) {
    next(error);
  }
}

export async function getAllBrands(_req: Request, res: Response, next: NextFunction) {
  try {
    const brands = await BrandService.getAllBrands();
    res.json(brands.map(dtoMapper.mapBrandsforAll));
    return;
  } catch (error) {
    next(error);
  }
}

export async function getBrandByName(req: Request, res: Response, next: NextFunction) {
  try {
    const { name } = req.params;
    if (!name) {
      res.status(400).json({ message: 'Brand name is required' });
      return;
    }

    const brand = await BrandService.getBrandByName(name);
    if (!brand) {
      res.status(404).json({ message: 'Brand not found' });
      return;
    } else {
      res.json(dtoMapper.mapBrandsforAll(brand));
      return;
    }
  } catch (error) {
    next(error);
  }
}
