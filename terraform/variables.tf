variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "ap-northeast-1"  # Tokyo
}

variable "domain_name" {
  description = "Domain name for the portfolio"
  type        = string
  default     = "phylieng.com"
}

variable "use_route53" {
  description = "Whether to use Route53 for DNS management"
  type        = bool
  default     = true
}
