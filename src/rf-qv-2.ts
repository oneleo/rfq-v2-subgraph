import {
  AllowTransfer as AllowTransferEvent,
  DepositETH as DepositETHEvent,
  DisallowTransfer as DisallowTransferEvent,
  FilledRFQ as FilledRFQEvent,
  OwnerChanged as OwnerChangedEvent,
  OwnerNominated as OwnerNominatedEvent,
  SetFeeCollector as SetFeeCollectorEvent,
  UpgradeSpender as UpgradeSpenderEvent
} from "../generated/RFQv2/RFQv2"
import {
  AllowTransfer,
  DepositETH,
  DisallowTransfer,
  FilledRFQ,
  OwnerChanged,
  OwnerNominated,
  SetFeeCollector,
  UpgradeSpender
} from "../generated/schema"

export function handleAllowTransfer(event: AllowTransferEvent): void {
  let entity = new AllowTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.spender = event.params.spender
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositETH(event: DepositETHEvent): void {
  let entity = new DepositETH(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisallowTransfer(event: DisallowTransferEvent): void {
  let entity = new DisallowTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.spender = event.params.spender
  entity.token = event.params.token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFilledRFQ(event: FilledRFQEvent): void {
  let entity = new FilledRFQ(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerHash = event.params.offerHash
  entity.user = event.params.user
  entity.maker = event.params.maker
  entity.takerToken = event.params.takerToken
  entity.takerTokenAmount = event.params.takerTokenAmount
  entity.makerToken = event.params.makerToken
  entity.makerTokenAmount = event.params.makerTokenAmount
  entity.recipient = event.params.recipient
  entity.settleAmount = event.params.settleAmount
  entity.feeFactor = event.params.feeFactor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerNominated(event: OwnerNominatedEvent): void {
  let entity = new OwnerNominated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetFeeCollector(event: SetFeeCollectorEvent): void {
  let entity = new SetFeeCollector(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFeeCollector = event.params.newFeeCollector

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgradeSpender(event: UpgradeSpenderEvent): void {
  let entity = new UpgradeSpender(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSpender = event.params.newSpender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
