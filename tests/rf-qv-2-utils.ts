import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AllowTransfer,
  DepositETH,
  DisallowTransfer,
  FilledRFQ,
  OwnerChanged,
  OwnerNominated,
  SetFeeCollector,
  UpgradeSpender
} from "../generated/RFQv2/RFQv2"

export function createAllowTransferEvent(
  spender: Address,
  token: Address
): AllowTransfer {
  let allowTransferEvent = changetype<AllowTransfer>(newMockEvent())

  allowTransferEvent.parameters = new Array()

  allowTransferEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowTransferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return allowTransferEvent
}

export function createDepositETHEvent(amount: BigInt): DepositETH {
  let depositEthEvent = changetype<DepositETH>(newMockEvent())

  depositEthEvent.parameters = new Array()

  depositEthEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEthEvent
}

export function createDisallowTransferEvent(
  spender: Address,
  token: Address
): DisallowTransfer {
  let disallowTransferEvent = changetype<DisallowTransfer>(newMockEvent())

  disallowTransferEvent.parameters = new Array()

  disallowTransferEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  disallowTransferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return disallowTransferEvent
}

export function createFilledRFQEvent(
  offerHash: Bytes,
  user: Address,
  maker: Address,
  takerToken: Address,
  takerTokenAmount: BigInt,
  makerToken: Address,
  makerTokenAmount: BigInt,
  recipient: Address,
  settleAmount: BigInt,
  feeFactor: BigInt
): FilledRFQ {
  let filledRfqEvent = changetype<FilledRFQ>(newMockEvent())

  filledRfqEvent.parameters = new Array()

  filledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "offerHash",
      ethereum.Value.fromFixedBytes(offerHash)
    )
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "takerToken",
      ethereum.Value.fromAddress(takerToken)
    )
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "takerTokenAmount",
      ethereum.Value.fromUnsignedBigInt(takerTokenAmount)
    )
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "makerToken",
      ethereum.Value.fromAddress(makerToken)
    )
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "makerTokenAmount",
      ethereum.Value.fromUnsignedBigInt(makerTokenAmount)
    )
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "settleAmount",
      ethereum.Value.fromUnsignedBigInt(settleAmount)
    )
  )
  filledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "feeFactor",
      ethereum.Value.fromUnsignedBigInt(feeFactor)
    )
  )

  return filledRfqEvent
}

export function createOwnerChangedEvent(
  oldOwner: Address,
  newOwner: Address
): OwnerChanged {
  let ownerChangedEvent = changetype<OwnerChanged>(newMockEvent())

  ownerChangedEvent.parameters = new Array()

  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerChangedEvent
}

export function createOwnerNominatedEvent(newOwner: Address): OwnerNominated {
  let ownerNominatedEvent = changetype<OwnerNominated>(newMockEvent())

  ownerNominatedEvent.parameters = new Array()

  ownerNominatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerNominatedEvent
}

export function createSetFeeCollectorEvent(
  newFeeCollector: Address
): SetFeeCollector {
  let setFeeCollectorEvent = changetype<SetFeeCollector>(newMockEvent())

  setFeeCollectorEvent.parameters = new Array()

  setFeeCollectorEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeCollector",
      ethereum.Value.fromAddress(newFeeCollector)
    )
  )

  return setFeeCollectorEvent
}

export function createUpgradeSpenderEvent(newSpender: Address): UpgradeSpender {
  let upgradeSpenderEvent = changetype<UpgradeSpender>(newMockEvent())

  upgradeSpenderEvent.parameters = new Array()

  upgradeSpenderEvent.parameters.push(
    new ethereum.EventParam(
      "newSpender",
      ethereum.Value.fromAddress(newSpender)
    )
  )

  return upgradeSpenderEvent
}
