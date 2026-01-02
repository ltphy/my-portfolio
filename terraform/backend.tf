terraform {
  backend "s3" {
    bucket         = "phylieng-terraform-state"
    key            = "portfolio/terraform.tfstate"
    region         = "ap-northeast-1"
    encrypt        = true
  }
}
