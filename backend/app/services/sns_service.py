import os
import boto3

AWS_REGION = os.getenv("AWS_REGION")
ADMIN_TOPIC_ARN = os.getenv("SNS_ADMIN_TOPIC_ARN")

sns_client = boto3.client("sns", region_name=AWS_REGION)


def send_admin_notification(message: str):
    if not ADMIN_TOPIC_ARN:
        raise ValueError("SNS_ADMIN_TOPIC_ARN is not set")

    sns_client.publish(
        TopicArn=ADMIN_TOPIC_ARN,
        Message=message,
        Subject="New Inquiry Received"
    )
