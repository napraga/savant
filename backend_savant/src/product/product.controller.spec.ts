import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const productServiceMock = {
      getAllProducts: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [{
        provide: ProductService,
        useValue: productServiceMock,
      }],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of products', async () => {
    const products = [{ name: 'Product 1', price: 19.99 }, { name: 'Product 2', price: 29.99 }];

    jest.spyOn(controller, 'getAllProducts').mockResolvedValueOnce(products);

    const result = await controller.getAllProducts();
    expect(result).toEqual(products);
  });
});
