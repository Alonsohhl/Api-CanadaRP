// @ts-ignore
import { IsOptional, IsString, ValidateNested } from "class-validator";
// import CreateAddressDto from "./address.dto";

class CreateUserDto {
  @IsString()
  public userName: string;

  @IsString()
  public userLastName: string;

  @IsString()
  public userEmail: string;

  @IsString()
  public userPassword: string;

  @IsString()
  public userPhone: string;

  @IsOptional()
  @IsString()
  public userSecQuestion: string;

  @IsOptional()
  @IsString()
  public userSecAnswer: string;
}

export default CreateUserDto;
