# Store Terraform state in S3 (recommended for team/CI use)
terraform {
  backend "s3" {
    bucket         = "phylieng-terraform-state"  # Create this bucket manually first
    key            = "portfolio/terraform.tfstate"
    region         = "ap-northeast-1"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"  # Optional: for state locking
  }
}
